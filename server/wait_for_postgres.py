import os
import logging
from time import time, sleep
import psycopg2


CHECK_TIMEOUT = 30
CHECK_INTERVAL = 1

interval_unit = "second" + ("s"*(CHECK_INTERVAL - 1))

config = {
    "host": 'db',
    "user": 'postgres',
    "password": 'postgres',
    "dbname": 'postgres',
}

start_time = time()
logger = logging.getLogger()
logger.setLevel(logging.INFO)
logger.addHandler(logging.StreamHandler())


def pg_isready(host, user, password, dbname):
    while time() - start_time < CHECK_TIMEOUT:
        try:
            conn = psycopg2.connect(**vars())
            logger.info("Postgres is ready! ✨ 💅")
            conn.close()
            return True
        except psycopg2.OperationalError:
            logger.info(f"Postgres isn't ready. Waiting for {CHECK_INTERVAL} second...")
            sleep(CHECK_INTERVAL)

    logger.error(f"TIMED OUT, We could not connect to Postgres within {CHECK_TIMEOUT} seconds.")
    return False


pg_isready(**config)
