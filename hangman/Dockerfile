FROM golang:1.20.5-alpine3.18

WORKDIR /app

RUN go mod init hangman

COPY . .

RUN go build -o hangman

CMD ["./hangman"]
