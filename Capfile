# Capfileは、capistrano全体の設定ファイルです。
# require により引数としておかれた文字列が指すディレクトリが読み込まれ、その中にデプロイに際して必要な動作が一通り記述されています。
require "capistrano/setup"
require "capistrano/deploy"
require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git
require 'capistrano/rbenv'
require 'capistrano/bundler'
require 'capistrano/rails/assets'
require 'capistrano/rails/migrations'
require 'capistrano3/unicorn'

Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }