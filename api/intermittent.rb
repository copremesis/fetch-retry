require 'sinatra'
require 'json'

post '/idp' do
  if ((rand(0..10) % 5) == 0)
    status 200
  else
    status 400
  end
  {msg: 'Success!!!'}.to_json
end
