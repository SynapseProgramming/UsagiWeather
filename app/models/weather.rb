class Weather < ApplicationRecord
    validates :temp, presence: true
    validates :press, presence: true
    validates :alt, presence: true
    validates :humid, presence: true
end
