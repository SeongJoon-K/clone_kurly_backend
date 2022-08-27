-- migrate:up
CREATE TABLE address (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    detail_address VARCHAR(100) NULL,
    receiver VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL
);

-- migrate:down
DROP TABLE address;
