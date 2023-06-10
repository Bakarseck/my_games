FROM golang:1.20.5-alpine3.18

WORKDIR /app

RUN go mod init tictactoe

COPY . .

RUN go build -o tictactoe

CMD ["./tictactoe"]
