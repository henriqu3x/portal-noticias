create extension if not exists pgcrypto;

create table if not exists perfil(
	id uuid primary key default gen_random_uuid(),
	tipo_perfil varchar(20) not null default('cliente'),
	check (tipo_perfil IN ('admin', 'cliente'))
);

insert into perfil (tipo_perfil) values 
('cliente'),
('admin');

create table if not exists usuario(
	id uuid primary key default gen_random_uuid(),
	nome varchar(75) not null,
	email varchar(100) unique not null,
	senha varchar(255) not null,
	perfil_id uuid not null,
	constraint fk_usuario_perfil foreign key (perfil_id) references perfil(id)
);

create table if not exists image(
	id uuid primary key default gen_random_uuid(),
	url text,
	alt varchar(255)
);

create table if not exists noticia(
	id uuid primary key default gen_random_uuid(),
	titulo varchar(255) not null,
	descricao text,
	status boolean not null default(false),
	image_id uuid,
	data_publicacao timestamptz default(now()),
	usuario_id uuid,
	data_atualizacao timestamptz default(now()),
	conteudo text not null,
	constraint fk_noticia_image foreign key (image_id) references image(id),
	constraint fk_noticia_usuario foreign key (usuario_id) references usuario(id)
);

create or replace function atualizar_data_atualizacao()
returns trigger as $$
begin
	NEW.data_atualizacao = NOW();
	return NEW;
end;
$$ language plpgsql;

create trigger trg_noticia_data_atualizacao
before update on noticia
for each row
execute function atualizar_data_atualizacao();