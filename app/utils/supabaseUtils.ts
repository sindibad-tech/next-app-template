import { Pool } from "pg";

const pool = new Pool({
  user: process.env.TEMP_POSTGRES_USER,
  host: process.env.TEMP_POSTGRES_HOST,
  database: process.env.TEMP_POSTGRES_DATABASE,
  password: process.env.TEMP_POSTGRES_PASSWORD,
  port: 6543,
  connectionTimeoutMillis: 20000,
  idleTimeoutMillis: 10000,
  keepAlive: true,
});

export async function querySupabaseData<T>(
  table: string,
  selectFields: string,
  conditions: { field: string; operator: string; value: any }[],
  orderBy: { field: string; ascending: boolean },
  logicalOperator: string = "AND",
  limit?: number,
): Promise<T[]> {
  try {
    let query = `SELECT ${selectFields} FROM "${table}"`;
    const queryParams: any[] = [];

    if (conditions.length > 0) {
      const whereClauses = conditions.map((condition, index) => {
        queryParams.push(condition.value);
        return `${condition.field} ${condition.operator} $${index + 1}`;
      });
      query += ` WHERE ${whereClauses.join(` ${logicalOperator} `)}`; // Use logical operator
    }

    query += ` ORDER BY ${orderBy.field} ${orderBy.ascending ? "ASC" : "DESC"}`;

    if (limit !== undefined) {
      query += ` LIMIT ${limit}`;
    }

    const { rows } = await pool.query(query, queryParams);

    return rows as T[];
  } catch (error) {
    console.error("Postgres query error:", error);
    return [];
  }
}
