import { Injectable } from '@nestjs/common';
import db from '../lib/db';

@Injectable()
export class ManageService {
  async createOfficer(officer: { name: string; rank: string }) {
    const result = await db.query('insertOfficer', [
      officer.name,
      officer.rank,
    ]);
    return {
      id: (result as any).insertId, // mysql2는 insertId 제공
      ...officer,
    };
  }

  async getOfficers() {
    const officers = await db.query('getOfficers');
    return officers;
  }

  async updateOfficer(id: number, updateBody: { name: string; rank: string }) {
    await db.query('updateOfficer', [updateBody.name, updateBody.rank, id]);
    return { id, ...updateBody };
  }
}
