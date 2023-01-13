Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      post 'weathers/create'
      get 'weathers/read'
    end
  end

  get 'hello_world', to: 'hello_world#index'
end
