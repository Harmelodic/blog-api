# blog-api

A place for opinions, lists, reviews and more!

## SQL Setup

### Database

```sql
CREATE DATABASE blog;
```

### Tables

```sql
USE blog;

CREATE TABLE posts
(
    title       VARCHAR(255) NOT NULL,
    route       VARCHAR(255) NOT NULL,
    datePosted  BIGINT       NOT NULL,
    lastUpdated BIGINT       NOT NULL,
    fileName    VARCHAR(255) NOT NULL,
    category    VARCHAR(255) NOT NULL,
    PRIMARY KEY (datePosted)
);
```

### API Account

```sql
CREATE USER 'blog-api'@'cloudsqlproxy~%' IDENTIFIED BY '';

GRANT SELECT, UPDATE, DELETE, INSERT ON blog.* TO 'blog-api'@'cloudsqlproxy~%';
```