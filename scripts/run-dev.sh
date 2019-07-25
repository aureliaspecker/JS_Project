set -e

onFinish() {
    echo "Cleaning up"
    kill -- -$$
    exit 0
}

trap "onFinish" SIGINT SIGTERM

source env.dev

node app.js