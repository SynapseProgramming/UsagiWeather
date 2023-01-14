Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "hello_world#index"
  namespace :api do
    namespace :v1 do
      post 'weathers/create'
      get 'weathers/read'
      get 'weathers/destroy'
      get 'weathers/latest'
    end
  end

  get '/*path' => 'hello_world#index'
  get 'usagi_weather', to: 'hello_world#index'


end
