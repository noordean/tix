class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.text :address
      t.text :contact_info
      t.datetime :starts_at
      t.datetime :ends_at
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
