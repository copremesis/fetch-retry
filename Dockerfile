FROM ubuntu
RUN DEBIAN_FRONTEND="noninteractive" apt-get -y update
RUN DEBIAN_FRONTEND="noninteractive" apt-get install -y screen ruby ruby-dev nodejs npm jq #build-essential vim curl wget
COPY .screenrc /root
RUN gem install bundler
RUN mkdir /src
COPY api /src/api
RUN cd /src/api && bundle
COPY fetch-retry /src/fetch-retry
RUN cd /src/fetch-retry && npm install
CMD screen

