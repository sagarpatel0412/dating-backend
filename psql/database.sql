create table users_roles (
    id uuid DEFAULT uuid_generate_v4(),
    name varchar unique not null,
    value varchar unique not null,
    description varchar not null,
    created_at timestamp,
    updated_at timestamp,
    primary key(id)
);