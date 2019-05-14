set -e

onFinish() {
    echo "Cleaning up"
    kill -- -$$
    exit 0
}

trap "onFinish" SIGINT SIGTERM

source env.local

mongod & (sleep 5 && nodemon ./src/app.js)