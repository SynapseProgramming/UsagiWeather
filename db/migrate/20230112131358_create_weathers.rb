class CreateWeathers < ActiveRecord::Migration[7.0]
  def change
    create_table :weathers do |t|
      t.decimal :temp, null: false
      t.decimal :press, null: false
      t.decimal :alt, null: false
      t.decimal :humid, null: false

      t.timestamps
    end
  end
end
