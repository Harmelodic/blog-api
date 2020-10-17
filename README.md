# scribbles

A place for opinions, lists, reviews and more!

## SQL Setup

### Database

```sql
CREATE DATABASE scribbles;
```

### Tables

```sql
USE scribbles;

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
CREATE USER 'scribbles-api'@'cloudsqlproxy~%' IDENTIFIED BY '';

GRANT SELECT, UPDATE, DELETE, INSERT ON scribbles.* TO 'scribbles-api'@'cloudsqlproxy~%';
```