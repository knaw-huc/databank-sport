FROM node:alpine as frontend-build

WORKDIR /app
COPY ./src/browser/ /app
RUN npm install && npm run build

FROM python:3.11-slim

ENV PYTHONPATH /app
ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY ./src/service/ /app
COPY ./src/service/requirements.txt /app
COPY --from=frontend-build /app/build /app/browser

RUN pip3 install --trusted-host pypi.python.org -r /app/requirements.txt &&\
    pip3 install --trusted-host pypi.python.org gunicorn

EXPOSE 5000

CMD ["gunicorn", "-b", ":5000", "-t", "60", "-w", "4", "app:app"]
