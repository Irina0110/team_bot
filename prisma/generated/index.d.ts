
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>
/**
 * Model Command
 * 
 */
export type Command = $Result.DefaultSelection<Prisma.$CommandPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  CUSTOMER: 'CUSTOMER',
  EVENT_ORGANIZATOR: 'EVENT_ORGANIZATOR',
  CANDIDAT: 'CANDIDAT',
  TEAM_MEMBER: 'TEAM_MEMBER',
  TEAMLEAD: 'TEAMLEAD'
};

export type Roles = (typeof Roles)[keyof typeof Roles]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Themes
 * const themes = await prisma.theme.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Themes
   * const themes = await prisma.theme.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs>;

  /**
   * `prisma.command`: Exposes CRUD operations for the **Command** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commands
    * const commands = await prisma.command.findMany()
    * ```
    */
  get command(): Prisma.CommandDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Theme: 'Theme',
    Command: 'Command',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'theme' | 'command' | 'user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>,
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      Command: {
        payload: Prisma.$CommandPayload<ExtArgs>
        fields: Prisma.CommandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          findFirst: {
            args: Prisma.CommandFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          findMany: {
            args: Prisma.CommandFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>[]
          }
          create: {
            args: Prisma.CommandCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          createMany: {
            args: Prisma.CommandCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommandDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          update: {
            args: Prisma.CommandUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          deleteMany: {
            args: Prisma.CommandDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommandUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommandUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          aggregate: {
            args: Prisma.CommandAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommand>
          }
          groupBy: {
            args: Prisma.CommandGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommandGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandCountArgs<ExtArgs>,
            result: $Utils.Optional<CommandCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    comand: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comand?: boolean | ThemeCountOutputTypeCountComandArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountComandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandWhereInput
  }


  /**
   * Count Type CommandCountOutputType
   */

  export type CommandCountOutputType = {
    User: number
  }

  export type CommandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | CommandCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * CommandCountOutputType without action
   */
  export type CommandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandCountOutputType
     */
    select?: CommandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommandCountOutputType without action
   */
  export type CommandCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    id: number | null
    max_count_team: number | null
    max_member_in_team: number | null
  }

  export type ThemeSumAggregateOutputType = {
    id: number | null
    max_count_team: number | null
    max_member_in_team: number | null
  }

  export type ThemeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    max_count_team: number | null
    max_member_in_team: number | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    max_count_team: number | null
    max_member_in_team: number | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    max_count_team: number
    max_member_in_team: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    id?: true
    max_count_team?: true
    max_member_in_team?: true
  }

  export type ThemeSumAggregateInputType = {
    id?: true
    max_count_team?: true
    max_member_in_team?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    max_count_team?: true
    max_member_in_team?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    max_count_team?: true
    max_member_in_team?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    max_count_team?: true
    max_member_in_team?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: number
    name: string
    description: string
    max_count_team: number
    max_member_in_team: number
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    max_count_team?: boolean
    max_member_in_team?: boolean
    comand?: boolean | Theme$comandArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    max_count_team?: boolean
    max_member_in_team?: boolean
  }


  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comand?: boolean | Theme$comandArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      comand: Prisma.$CommandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      max_count_team: number
      max_member_in_team: number
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }


  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThemeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Theme that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThemeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThemeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
    **/
    create<T extends ThemeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Themes.
     *     @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     *     @example
     *     // Create many Themes
     *     const theme = await prisma.theme.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ThemeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
    **/
    delete<T extends ThemeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThemeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThemeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThemeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
    **/
    upsert<T extends ThemeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>
    ): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comand<T extends Theme$comandArgs<ExtArgs> = {}>(args?: Subset<T, Theme$comandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Theme model
   */ 
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'Int'>
    readonly name: FieldRef<"Theme", 'String'>
    readonly description: FieldRef<"Theme", 'String'>
    readonly max_count_team: FieldRef<"Theme", 'Int'>
    readonly max_member_in_team: FieldRef<"Theme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
  }

  /**
   * Theme.comand
   */
  export type Theme$comandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    where?: CommandWhereInput
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    cursor?: CommandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
  }


  /**
   * Model Command
   */

  export type AggregateCommand = {
    _count: CommandCountAggregateOutputType | null
    _avg: CommandAvgAggregateOutputType | null
    _sum: CommandSumAggregateOutputType | null
    _min: CommandMinAggregateOutputType | null
    _max: CommandMaxAggregateOutputType | null
  }

  export type CommandAvgAggregateOutputType = {
    id: number | null
    theme_id: number | null
  }

  export type CommandSumAggregateOutputType = {
    id: number | null
    theme_id: number | null
  }

  export type CommandMinAggregateOutputType = {
    id: number | null
    name: string | null
    theme_id: number | null
  }

  export type CommandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    theme_id: number | null
  }

  export type CommandCountAggregateOutputType = {
    id: number
    name: number
    theme_id: number
    _all: number
  }


  export type CommandAvgAggregateInputType = {
    id?: true
    theme_id?: true
  }

  export type CommandSumAggregateInputType = {
    id?: true
    theme_id?: true
  }

  export type CommandMinAggregateInputType = {
    id?: true
    name?: true
    theme_id?: true
  }

  export type CommandMaxAggregateInputType = {
    id?: true
    name?: true
    theme_id?: true
  }

  export type CommandCountAggregateInputType = {
    id?: true
    name?: true
    theme_id?: true
    _all?: true
  }

  export type CommandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Command to aggregate.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commands
    **/
    _count?: true | CommandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandMaxAggregateInputType
  }

  export type GetCommandAggregateType<T extends CommandAggregateArgs> = {
        [P in keyof T & keyof AggregateCommand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommand[P]>
      : GetScalarType<T[P], AggregateCommand[P]>
  }




  export type CommandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandWhereInput
    orderBy?: CommandOrderByWithAggregationInput | CommandOrderByWithAggregationInput[]
    by: CommandScalarFieldEnum[] | CommandScalarFieldEnum
    having?: CommandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandCountAggregateInputType | true
    _avg?: CommandAvgAggregateInputType
    _sum?: CommandSumAggregateInputType
    _min?: CommandMinAggregateInputType
    _max?: CommandMaxAggregateInputType
  }

  export type CommandGroupByOutputType = {
    id: number
    name: string
    theme_id: number
    _count: CommandCountAggregateOutputType | null
    _avg: CommandAvgAggregateOutputType | null
    _sum: CommandSumAggregateOutputType | null
    _min: CommandMinAggregateOutputType | null
    _max: CommandMaxAggregateOutputType | null
  }

  type GetCommandGroupByPayload<T extends CommandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandGroupByOutputType[P]>
            : GetScalarType<T[P], CommandGroupByOutputType[P]>
        }
      >
    >


  export type CommandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    theme_id?: boolean
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
    User?: boolean | Command$UserArgs<ExtArgs>
    _count?: boolean | CommandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["command"]>

  export type CommandSelectScalar = {
    id?: boolean
    name?: boolean
    theme_id?: boolean
  }


  export type CommandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
    User?: boolean | Command$UserArgs<ExtArgs>
    _count?: boolean | CommandCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Command"
    objects: {
      theme: Prisma.$ThemePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      theme_id: number
    }, ExtArgs["result"]["command"]>
    composites: {}
  }


  type CommandGetPayload<S extends boolean | null | undefined | CommandDefaultArgs> = $Result.GetResult<Prisma.$CommandPayload, S>

  type CommandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommandCountAggregateInputType | true
    }

  export interface CommandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Command'], meta: { name: 'Command' } }
    /**
     * Find zero or one Command that matches the filter.
     * @param {CommandFindUniqueArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommandFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommandFindUniqueArgs<ExtArgs>>
    ): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Command that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommandFindUniqueOrThrowArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommandFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommandFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Command that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindFirstArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommandFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommandFindFirstArgs<ExtArgs>>
    ): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Command that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindFirstOrThrowArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommandFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommandFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commands
     * const commands = await prisma.command.findMany()
     * 
     * // Get first 10 Commands
     * const commands = await prisma.command.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandWithIdOnly = await prisma.command.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommandFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommandFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Command.
     * @param {CommandCreateArgs} args - Arguments to create a Command.
     * @example
     * // Create one Command
     * const Command = await prisma.command.create({
     *   data: {
     *     // ... data to create a Command
     *   }
     * })
     * 
    **/
    create<T extends CommandCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommandCreateArgs<ExtArgs>>
    ): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Commands.
     *     @param {CommandCreateManyArgs} args - Arguments to create many Commands.
     *     @example
     *     // Create many Commands
     *     const command = await prisma.command.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommandCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommandCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Command.
     * @param {CommandDeleteArgs} args - Arguments to delete one Command.
     * @example
     * // Delete one Command
     * const Command = await prisma.command.delete({
     *   where: {
     *     // ... filter to delete one Command
     *   }
     * })
     * 
    **/
    delete<T extends CommandDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommandDeleteArgs<ExtArgs>>
    ): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Command.
     * @param {CommandUpdateArgs} args - Arguments to update one Command.
     * @example
     * // Update one Command
     * const command = await prisma.command.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommandUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommandUpdateArgs<ExtArgs>>
    ): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Commands.
     * @param {CommandDeleteManyArgs} args - Arguments to filter Commands to delete.
     * @example
     * // Delete a few Commands
     * const { count } = await prisma.command.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommandDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommandDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commands
     * const command = await prisma.command.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommandUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommandUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Command.
     * @param {CommandUpsertArgs} args - Arguments to update or create a Command.
     * @example
     * // Update or create a Command
     * const command = await prisma.command.upsert({
     *   create: {
     *     // ... data to create a Command
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Command we want to update
     *   }
     * })
    **/
    upsert<T extends CommandUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommandUpsertArgs<ExtArgs>>
    ): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandCountArgs} args - Arguments to filter Commands to count.
     * @example
     * // Count the number of Commands
     * const count = await prisma.command.count({
     *   where: {
     *     // ... the filter for the Commands we want to count
     *   }
     * })
    **/
    count<T extends CommandCountArgs>(
      args?: Subset<T, CommandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Command.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommandAggregateArgs>(args: Subset<T, CommandAggregateArgs>): Prisma.PrismaPromise<GetCommandAggregateType<T>>

    /**
     * Group by Command.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandGroupByArgs['orderBy'] }
        : { orderBy?: CommandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Command model
   */
  readonly fields: CommandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Command.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    theme<T extends ThemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThemeDefaultArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends Command$UserArgs<ExtArgs> = {}>(args?: Subset<T, Command$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Command model
   */ 
  interface CommandFieldRefs {
    readonly id: FieldRef<"Command", 'Int'>
    readonly name: FieldRef<"Command", 'String'>
    readonly theme_id: FieldRef<"Command", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Command findUnique
   */
  export type CommandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command findUniqueOrThrow
   */
  export type CommandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command findFirst
   */
  export type CommandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commands.
     */
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command findFirstOrThrow
   */
  export type CommandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commands.
     */
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command findMany
   */
  export type CommandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Commands to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command create
   */
  export type CommandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The data needed to create a Command.
     */
    data: XOR<CommandCreateInput, CommandUncheckedCreateInput>
  }

  /**
   * Command createMany
   */
  export type CommandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commands.
     */
    data: CommandCreateManyInput | CommandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Command update
   */
  export type CommandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The data needed to update a Command.
     */
    data: XOR<CommandUpdateInput, CommandUncheckedUpdateInput>
    /**
     * Choose, which Command to update.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command updateMany
   */
  export type CommandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commands.
     */
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyInput>
    /**
     * Filter which Commands to update
     */
    where?: CommandWhereInput
  }

  /**
   * Command upsert
   */
  export type CommandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The filter to search for the Command to update in case it exists.
     */
    where: CommandWhereUniqueInput
    /**
     * In case the Command found by the `where` argument doesn't exist, create a new Command with this data.
     */
    create: XOR<CommandCreateInput, CommandUncheckedCreateInput>
    /**
     * In case the Command was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandUpdateInput, CommandUncheckedUpdateInput>
  }

  /**
   * Command delete
   */
  export type CommandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter which Command to delete.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command deleteMany
   */
  export type CommandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commands to delete
     */
    where?: CommandWhereInput
  }

  /**
   * Command.User
   */
  export type Command$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Command without action
   */
  export type CommandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    command_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    command_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    telegram_chat_id: string | null
    name: string | null
    role: $Enums.Roles | null
    command_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    telegram_chat_id: string | null
    name: string | null
    role: $Enums.Roles | null
    command_id: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    telegram_chat_id: number
    name: number
    role: number
    command_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    command_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    command_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    telegram_chat_id?: true
    name?: true
    role?: true
    command_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    telegram_chat_id?: true
    name?: true
    role?: true
    command_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    telegram_chat_id?: true
    name?: true
    role?: true
    command_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    telegram_chat_id: string
    name: string
    role: $Enums.Roles
    command_id: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_chat_id?: boolean
    name?: boolean
    role?: boolean
    command_id?: boolean
    command?: boolean | User$commandArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    telegram_chat_id?: boolean
    name?: boolean
    role?: boolean
    command_id?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | User$commandArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      command: Prisma.$CommandPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telegram_chat_id: string
      name: string
      role: $Enums.Roles
      command_id: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    command<T extends User$commandArgs<ExtArgs> = {}>(args?: Subset<T, User$commandArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly telegram_chat_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Roles'>
    readonly command_id: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.command
   */
  export type User$commandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    where?: CommandWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    max_count_team: 'max_count_team',
    max_member_in_team: 'max_member_in_team'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const CommandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    theme_id: 'theme_id'
  };

  export type CommandScalarFieldEnum = (typeof CommandScalarFieldEnum)[keyof typeof CommandScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    telegram_chat_id: 'telegram_chat_id',
    name: 'name',
    role: 'role',
    command_id: 'command_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: IntFilter<"Theme"> | number
    name?: StringFilter<"Theme"> | string
    description?: StringFilter<"Theme"> | string
    max_count_team?: IntFilter<"Theme"> | number
    max_member_in_team?: IntFilter<"Theme"> | number
    comand?: CommandListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_count_team?: SortOrder
    max_member_in_team?: SortOrder
    comand?: CommandOrderByRelationAggregateInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    description?: StringFilter<"Theme"> | string
    max_count_team?: IntFilter<"Theme"> | number
    max_member_in_team?: IntFilter<"Theme"> | number
    comand?: CommandListRelationFilter
  }, "id" | "name">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_count_team?: SortOrder
    max_member_in_team?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _avg?: ThemeAvgOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
    _sum?: ThemeSumOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Theme"> | number
    name?: StringWithAggregatesFilter<"Theme"> | string
    description?: StringWithAggregatesFilter<"Theme"> | string
    max_count_team?: IntWithAggregatesFilter<"Theme"> | number
    max_member_in_team?: IntWithAggregatesFilter<"Theme"> | number
  }

  export type CommandWhereInput = {
    AND?: CommandWhereInput | CommandWhereInput[]
    OR?: CommandWhereInput[]
    NOT?: CommandWhereInput | CommandWhereInput[]
    id?: IntFilter<"Command"> | number
    name?: StringFilter<"Command"> | string
    theme_id?: IntFilter<"Command"> | number
    theme?: XOR<ThemeRelationFilter, ThemeWhereInput>
    User?: UserListRelationFilter
  }

  export type CommandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    theme_id?: SortOrder
    theme?: ThemeOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type CommandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CommandWhereInput | CommandWhereInput[]
    OR?: CommandWhereInput[]
    NOT?: CommandWhereInput | CommandWhereInput[]
    theme_id?: IntFilter<"Command"> | number
    theme?: XOR<ThemeRelationFilter, ThemeWhereInput>
    User?: UserListRelationFilter
  }, "id" | "name">

  export type CommandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    theme_id?: SortOrder
    _count?: CommandCountOrderByAggregateInput
    _avg?: CommandAvgOrderByAggregateInput
    _max?: CommandMaxOrderByAggregateInput
    _min?: CommandMinOrderByAggregateInput
    _sum?: CommandSumOrderByAggregateInput
  }

  export type CommandScalarWhereWithAggregatesInput = {
    AND?: CommandScalarWhereWithAggregatesInput | CommandScalarWhereWithAggregatesInput[]
    OR?: CommandScalarWhereWithAggregatesInput[]
    NOT?: CommandScalarWhereWithAggregatesInput | CommandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Command"> | number
    name?: StringWithAggregatesFilter<"Command"> | string
    theme_id?: IntWithAggregatesFilter<"Command"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    telegram_chat_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    command_id?: IntNullableFilter<"User"> | number | null
    command?: XOR<CommandNullableRelationFilter, CommandWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    telegram_chat_id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    command_id?: SortOrderInput | SortOrder
    command?: CommandOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    telegram_chat_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    command_id?: IntNullableFilter<"User"> | number | null
    command?: XOR<CommandNullableRelationFilter, CommandWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    telegram_chat_id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    command_id?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    telegram_chat_id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRolesWithAggregatesFilter<"User"> | $Enums.Roles
    command_id?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type ThemeCreateInput = {
    name: string
    description: string
    max_count_team?: number
    max_member_in_team?: number
    comand?: CommandCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    max_count_team?: number
    max_member_in_team?: number
    comand?: CommandUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_count_team?: IntFieldUpdateOperationsInput | number
    max_member_in_team?: IntFieldUpdateOperationsInput | number
    comand?: CommandUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_count_team?: IntFieldUpdateOperationsInput | number
    max_member_in_team?: IntFieldUpdateOperationsInput | number
    comand?: CommandUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type ThemeCreateManyInput = {
    id?: number
    name: string
    description: string
    max_count_team?: number
    max_member_in_team?: number
  }

  export type ThemeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_count_team?: IntFieldUpdateOperationsInput | number
    max_member_in_team?: IntFieldUpdateOperationsInput | number
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_count_team?: IntFieldUpdateOperationsInput | number
    max_member_in_team?: IntFieldUpdateOperationsInput | number
  }

  export type CommandCreateInput = {
    name: string
    theme: ThemeCreateNestedOneWithoutComandInput
    User?: UserCreateNestedManyWithoutCommandInput
  }

  export type CommandUncheckedCreateInput = {
    id?: number
    name: string
    theme_id: number
    User?: UserUncheckedCreateNestedManyWithoutCommandInput
  }

  export type CommandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    theme?: ThemeUpdateOneRequiredWithoutComandNestedInput
    User?: UserUpdateManyWithoutCommandNestedInput
  }

  export type CommandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    theme_id?: IntFieldUpdateOperationsInput | number
    User?: UserUncheckedUpdateManyWithoutCommandNestedInput
  }

  export type CommandCreateManyInput = {
    id?: number
    name: string
    theme_id: number
  }

  export type CommandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CommandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    telegram_chat_id: string
    name: string
    role?: $Enums.Roles
    command?: CommandCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    telegram_chat_id: string
    name: string
    role?: $Enums.Roles
    command_id?: number | null
  }

  export type UserUpdateInput = {
    telegram_chat_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    command?: CommandUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_chat_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    command_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyInput = {
    id?: number
    telegram_chat_id: string
    name: string
    role?: $Enums.Roles
    command_id?: number | null
  }

  export type UserUpdateManyMutationInput = {
    telegram_chat_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_chat_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    command_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CommandListRelationFilter = {
    every?: CommandWhereInput
    some?: CommandWhereInput
    none?: CommandWhereInput
  }

  export type CommandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_count_team?: SortOrder
    max_member_in_team?: SortOrder
  }

  export type ThemeAvgOrderByAggregateInput = {
    id?: SortOrder
    max_count_team?: SortOrder
    max_member_in_team?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_count_team?: SortOrder
    max_member_in_team?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_count_team?: SortOrder
    max_member_in_team?: SortOrder
  }

  export type ThemeSumOrderByAggregateInput = {
    id?: SortOrder
    max_count_team?: SortOrder
    max_member_in_team?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ThemeRelationFilter = {
    is?: ThemeWhereInput
    isNot?: ThemeWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    theme_id?: SortOrder
  }

  export type CommandAvgOrderByAggregateInput = {
    id?: SortOrder
    theme_id?: SortOrder
  }

  export type CommandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    theme_id?: SortOrder
  }

  export type CommandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    theme_id?: SortOrder
  }

  export type CommandSumOrderByAggregateInput = {
    id?: SortOrder
    theme_id?: SortOrder
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommandNullableRelationFilter = {
    is?: CommandWhereInput | null
    isNot?: CommandWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    telegram_chat_id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    command_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    command_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegram_chat_id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    command_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    telegram_chat_id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    command_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    command_id?: SortOrder
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CommandCreateNestedManyWithoutThemeInput = {
    create?: XOR<CommandCreateWithoutThemeInput, CommandUncheckedCreateWithoutThemeInput> | CommandCreateWithoutThemeInput[] | CommandUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutThemeInput | CommandCreateOrConnectWithoutThemeInput[]
    createMany?: CommandCreateManyThemeInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type CommandUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<CommandCreateWithoutThemeInput, CommandUncheckedCreateWithoutThemeInput> | CommandCreateWithoutThemeInput[] | CommandUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutThemeInput | CommandCreateOrConnectWithoutThemeInput[]
    createMany?: CommandCreateManyThemeInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommandUpdateManyWithoutThemeNestedInput = {
    create?: XOR<CommandCreateWithoutThemeInput, CommandUncheckedCreateWithoutThemeInput> | CommandCreateWithoutThemeInput[] | CommandUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutThemeInput | CommandCreateOrConnectWithoutThemeInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutThemeInput | CommandUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: CommandCreateManyThemeInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutThemeInput | CommandUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutThemeInput | CommandUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type CommandUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<CommandCreateWithoutThemeInput, CommandUncheckedCreateWithoutThemeInput> | CommandCreateWithoutThemeInput[] | CommandUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutThemeInput | CommandCreateOrConnectWithoutThemeInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutThemeInput | CommandUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: CommandCreateManyThemeInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutThemeInput | CommandUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutThemeInput | CommandUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type ThemeCreateNestedOneWithoutComandInput = {
    create?: XOR<ThemeCreateWithoutComandInput, ThemeUncheckedCreateWithoutComandInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutComandInput
    connect?: ThemeWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCommandInput = {
    create?: XOR<UserCreateWithoutCommandInput, UserUncheckedCreateWithoutCommandInput> | UserCreateWithoutCommandInput[] | UserUncheckedCreateWithoutCommandInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommandInput | UserCreateOrConnectWithoutCommandInput[]
    createMany?: UserCreateManyCommandInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCommandInput = {
    create?: XOR<UserCreateWithoutCommandInput, UserUncheckedCreateWithoutCommandInput> | UserCreateWithoutCommandInput[] | UserUncheckedCreateWithoutCommandInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommandInput | UserCreateOrConnectWithoutCommandInput[]
    createMany?: UserCreateManyCommandInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ThemeUpdateOneRequiredWithoutComandNestedInput = {
    create?: XOR<ThemeCreateWithoutComandInput, ThemeUncheckedCreateWithoutComandInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutComandInput
    upsert?: ThemeUpsertWithoutComandInput
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutComandInput, ThemeUpdateWithoutComandInput>, ThemeUncheckedUpdateWithoutComandInput>
  }

  export type UserUpdateManyWithoutCommandNestedInput = {
    create?: XOR<UserCreateWithoutCommandInput, UserUncheckedCreateWithoutCommandInput> | UserCreateWithoutCommandInput[] | UserUncheckedCreateWithoutCommandInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommandInput | UserCreateOrConnectWithoutCommandInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommandInput | UserUpsertWithWhereUniqueWithoutCommandInput[]
    createMany?: UserCreateManyCommandInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommandInput | UserUpdateWithWhereUniqueWithoutCommandInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommandInput | UserUpdateManyWithWhereWithoutCommandInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCommandNestedInput = {
    create?: XOR<UserCreateWithoutCommandInput, UserUncheckedCreateWithoutCommandInput> | UserCreateWithoutCommandInput[] | UserUncheckedCreateWithoutCommandInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommandInput | UserCreateOrConnectWithoutCommandInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommandInput | UserUpsertWithWhereUniqueWithoutCommandInput[]
    createMany?: UserCreateManyCommandInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommandInput | UserUpdateWithWhereUniqueWithoutCommandInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommandInput | UserUpdateManyWithWhereWithoutCommandInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommandCreateNestedOneWithoutUserInput = {
    create?: XOR<CommandCreateWithoutUserInput, CommandUncheckedCreateWithoutUserInput>
    connectOrCreate?: CommandCreateOrConnectWithoutUserInput
    connect?: CommandWhereUniqueInput
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type CommandUpdateOneWithoutUserNestedInput = {
    create?: XOR<CommandCreateWithoutUserInput, CommandUncheckedCreateWithoutUserInput>
    connectOrCreate?: CommandCreateOrConnectWithoutUserInput
    upsert?: CommandUpsertWithoutUserInput
    disconnect?: CommandWhereInput | boolean
    delete?: CommandWhereInput | boolean
    connect?: CommandWhereUniqueInput
    update?: XOR<XOR<CommandUpdateToOneWithWhereWithoutUserInput, CommandUpdateWithoutUserInput>, CommandUncheckedUpdateWithoutUserInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CommandCreateWithoutThemeInput = {
    name: string
    User?: UserCreateNestedManyWithoutCommandInput
  }

  export type CommandUncheckedCreateWithoutThemeInput = {
    id?: number
    name: string
    User?: UserUncheckedCreateNestedManyWithoutCommandInput
  }

  export type CommandCreateOrConnectWithoutThemeInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutThemeInput, CommandUncheckedCreateWithoutThemeInput>
  }

  export type CommandCreateManyThemeInputEnvelope = {
    data: CommandCreateManyThemeInput | CommandCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type CommandUpsertWithWhereUniqueWithoutThemeInput = {
    where: CommandWhereUniqueInput
    update: XOR<CommandUpdateWithoutThemeInput, CommandUncheckedUpdateWithoutThemeInput>
    create: XOR<CommandCreateWithoutThemeInput, CommandUncheckedCreateWithoutThemeInput>
  }

  export type CommandUpdateWithWhereUniqueWithoutThemeInput = {
    where: CommandWhereUniqueInput
    data: XOR<CommandUpdateWithoutThemeInput, CommandUncheckedUpdateWithoutThemeInput>
  }

  export type CommandUpdateManyWithWhereWithoutThemeInput = {
    where: CommandScalarWhereInput
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyWithoutThemeInput>
  }

  export type CommandScalarWhereInput = {
    AND?: CommandScalarWhereInput | CommandScalarWhereInput[]
    OR?: CommandScalarWhereInput[]
    NOT?: CommandScalarWhereInput | CommandScalarWhereInput[]
    id?: IntFilter<"Command"> | number
    name?: StringFilter<"Command"> | string
    theme_id?: IntFilter<"Command"> | number
  }

  export type ThemeCreateWithoutComandInput = {
    name: string
    description: string
    max_count_team?: number
    max_member_in_team?: number
  }

  export type ThemeUncheckedCreateWithoutComandInput = {
    id?: number
    name: string
    description: string
    max_count_team?: number
    max_member_in_team?: number
  }

  export type ThemeCreateOrConnectWithoutComandInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutComandInput, ThemeUncheckedCreateWithoutComandInput>
  }

  export type UserCreateWithoutCommandInput = {
    telegram_chat_id: string
    name: string
    role?: $Enums.Roles
  }

  export type UserUncheckedCreateWithoutCommandInput = {
    id?: number
    telegram_chat_id: string
    name: string
    role?: $Enums.Roles
  }

  export type UserCreateOrConnectWithoutCommandInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommandInput, UserUncheckedCreateWithoutCommandInput>
  }

  export type UserCreateManyCommandInputEnvelope = {
    data: UserCreateManyCommandInput | UserCreateManyCommandInput[]
    skipDuplicates?: boolean
  }

  export type ThemeUpsertWithoutComandInput = {
    update: XOR<ThemeUpdateWithoutComandInput, ThemeUncheckedUpdateWithoutComandInput>
    create: XOR<ThemeCreateWithoutComandInput, ThemeUncheckedCreateWithoutComandInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutComandInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutComandInput, ThemeUncheckedUpdateWithoutComandInput>
  }

  export type ThemeUpdateWithoutComandInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_count_team?: IntFieldUpdateOperationsInput | number
    max_member_in_team?: IntFieldUpdateOperationsInput | number
  }

  export type ThemeUncheckedUpdateWithoutComandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_count_team?: IntFieldUpdateOperationsInput | number
    max_member_in_team?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithWhereUniqueWithoutCommandInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCommandInput, UserUncheckedUpdateWithoutCommandInput>
    create: XOR<UserCreateWithoutCommandInput, UserUncheckedCreateWithoutCommandInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCommandInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCommandInput, UserUncheckedUpdateWithoutCommandInput>
  }

  export type UserUpdateManyWithWhereWithoutCommandInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCommandInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    telegram_chat_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    command_id?: IntNullableFilter<"User"> | number | null
  }

  export type CommandCreateWithoutUserInput = {
    name: string
    theme: ThemeCreateNestedOneWithoutComandInput
  }

  export type CommandUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    theme_id: number
  }

  export type CommandCreateOrConnectWithoutUserInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutUserInput, CommandUncheckedCreateWithoutUserInput>
  }

  export type CommandUpsertWithoutUserInput = {
    update: XOR<CommandUpdateWithoutUserInput, CommandUncheckedUpdateWithoutUserInput>
    create: XOR<CommandCreateWithoutUserInput, CommandUncheckedCreateWithoutUserInput>
    where?: CommandWhereInput
  }

  export type CommandUpdateToOneWithWhereWithoutUserInput = {
    where?: CommandWhereInput
    data: XOR<CommandUpdateWithoutUserInput, CommandUncheckedUpdateWithoutUserInput>
  }

  export type CommandUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    theme?: ThemeUpdateOneRequiredWithoutComandNestedInput
  }

  export type CommandUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommandCreateManyThemeInput = {
    id?: number
    name: string
  }

  export type CommandUpdateWithoutThemeInput = {
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutCommandNestedInput
  }

  export type CommandUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutCommandNestedInput
  }

  export type CommandUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyCommandInput = {
    id?: number
    telegram_chat_id: string
    name: string
    role?: $Enums.Roles
  }

  export type UserUpdateWithoutCommandInput = {
    telegram_chat_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UserUncheckedUpdateWithoutCommandInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_chat_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UserUncheckedUpdateManyWithoutCommandInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_chat_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ThemeCountOutputTypeDefaultArgs instead
     */
    export type ThemeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThemeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommandCountOutputTypeDefaultArgs instead
     */
    export type CommandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThemeDefaultArgs instead
     */
    export type ThemeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThemeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommandDefaultArgs instead
     */
    export type CommandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}