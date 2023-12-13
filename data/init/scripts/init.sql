DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS reservations;

CREATE TABLE vehicles (
    id VARCHAR(36) PRIMARY KEY,
    type VARCHAR(36) NOT NULL,
    location VARCHAR(72) NOT NULL,
    "availableFromTime" TEXT NOT NULL,
    "availableToTime" TEXT NOT NULL,
    "availableDays" TEXT[] NOT NULL,
    "minimumMinutesBetweenBookings" INT NOT NULL
);

CREATE TABLE reservations (
    "id" INT PRIMARY KEY,
    "vehicleId" VARCHAR(36) NOT NULL,
    "startDateTime" TIMESTAMP NOT NULL,
    "endDateTime" TIMESTAMP NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL
);

\set content `cat /tmp/data/vehicles.json`
CREATE TEMP TABLE vehicles_from_json ( j jsonb);
INSERT INTO vehicles_from_json values (:'content');
SELECT * FROM vehicles_from_json;

INSERT INTO vehicles
SELECT v.*
FROM vehicles_from_json cross join lateral jsonb_populate_recordset(null::vehicles, j) as v;

SELECT * FROM vehicles;

\set content1 `cat /tmp/data/reservations.json`
CREATE TEMP TABLE reservations_from_json ( j1 jsonb);
INSERT INTO reservations_from_json values (:'content1');
SELECT * FROM reservations_from_json;

INSERT INTO reservations
SELECT r.*
FROM reservations_from_json cross join lateral jsonb_populate_recordset(null::reservations, j1) as r;

SELECT * FROM reservations;


