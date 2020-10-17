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
    lastUpdated VARCHAR(255) NOT NULL,
    fileName    VARCHAR(255) NOT NULL,
    PRIMARY KEY (datePosted)
);

CREATE TABLE labels
(
    id      INT          NOT NULL AUTO_INCREMENT,
    post_id BIGINT       NOT NULL,
    label   VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
```

### API Account

```sql
CREATE USER 'scribbles-api'@'cloudsqlproxy~%' IDENTIFIED BY '';

GRANT SELECT, UPDATE, DELETE, INSERT ON scribbles.* TO 'scribbles-api'@'cloudsqlproxy~%';
```