# You can run these commands in separate shells
# run locally
# web: rails s -p 3000

# expose to network
# web: rails s -b 192.168.50.119 -p 5000

# rtac86 ip address
web: rails s -b 192.168.1.119 -p 5000


# Next line runs a watch process with webpack to compile the changed files.
# When making frequent changes to client side assets, you will prefer building webpack assets
# upon saving rather than when you refresh your browser page.
# Note, if using React on Rails localization you will need to run
# `bundle exec rake react_on_rails:locale` before you run bin/webpacker
webpack: sh -c 'rm -rf public/packs/* || true && bin/webpacker -w'

   get 'hello_world', to: 'hello_world#index'
  