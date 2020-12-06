import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';
 
@Table({
  tableName: 'projects', modelName: 'projects', freezeTableName:true
})
export class Project extends Model<Project> {

  @Column
  name!: string;
 
  @Column
  desc!: string;

  @Column
  version!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}
