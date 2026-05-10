import { Injectable, OnModuleInit } from '@nestjs/common';
import * as sql from 'mssql';

@Injectable()
export class DatabaseService implements OnModuleInit {
  public pool: sql.ConnectionPool;

  async onModuleInit() {
    console.log('DATABASE_URL:', process.env.DATABASE_URL); // debug

    this.pool = await sql.connect(process.env.DATABASE_URL);
    console.log('Connected to SQL Server');
  }
}
