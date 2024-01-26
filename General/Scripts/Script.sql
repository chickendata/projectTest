
CREATE TABLE Product (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nameProduct varchar(255),
	image varchar(255),
	price int,
	description varchar(255),
	dayCreate varchar(255),
	dayDeal varchar(255)
)

CREATE TABLE login (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(255),
	pw varchar(255)
)

INSERT INTO login 
VALUES (1,'admin','123');

INSERT INTO Product 
VALUES (1,'Sua','anh_sua.jpg','5000','Sua vinamilk', '28/2/2023','1/3/2023');

INSERT INTO Product 
VALUES (2,'Banh mi thơm ngon','anh_banh_mi.jpg','10000','Bánh mì ngon từ các cửa hàng', '30/6/2023','3/7/2023');

