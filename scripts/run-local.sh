set -e

onFinish() {
    echo "Cleaning up"
    kill -- -$$
    exit 0
}

trap "onFinish" SIGINT SIGTERM

source env.local

mongod --dbpath ./data & (sleep 5 && nodemon ./src/app.js)