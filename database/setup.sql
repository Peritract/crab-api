DROP TABLE tag_connection;
DROP TABLE tag;
DROP TABLE insight;

CREATE TABLE insight (
    insight_id INT GENERATED ALWAYS AS IDENTITY,
    insight_title TEXT NOT NULL,
    insight_text TEXT NOT NULL,
    insight_source_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (insight_id)
);

CREATE TABLE tag (
    tag_id INT GENERATED ALWAYS AS IDENTITY,
    tag_text TEXT NOT NULL,
    PRIMARY KEY (tag_id)
);

CREATE TABLE tag_connection (
    tag_connection_id INT GENERATED ALWAYS AS IDENTITY,
    insight_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (tag_connection_id),
    FOREIGN KEY (insight_id) REFERENCES insight(insight_id),
    FOREIGN KEY (tag_id) REFERENCES tag(tag_id)
);