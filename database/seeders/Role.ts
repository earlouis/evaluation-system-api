import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Role.createMany([
      {
        name: 'DEAN',
        permissions: [
          'create-opcr',
          'view-opcr',
          'edit-opcr',
          'print-opcr',
          'view-ipcr',
        ]
      },
      {
        name: 'FACULTY',
        permissions: [
          'create-ipcr',
          'edit-ipcr',
          'view-ipcr',
        ]
      },
      {
        name: 'DEPARTMENT-CHAIRPERSON',
        permissions: [
          'create-ipcr',
          'edit-ipcr',
          'view-ipcr',
          'print-ipcr',
        ]
      },
      {
        name: 'STAFF',
        permissions: [
          'view-ipcr',
          'view-opcr',
          'print-ipcr',
          'print-opcr',
        ]
      },
    ])
  }
}
