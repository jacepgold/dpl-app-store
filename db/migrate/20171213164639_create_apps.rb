class CreateApps < ActiveRecord::Migration[5.1]
  def change
    create_table :apps do |t|
      t.string :name
      t.string :category
      t.string :version
      t.string :author
      t.string :logo
      t.text :description
      t.float :price
      t.boolean :featured

      t.timestamps
    end
  end
end
