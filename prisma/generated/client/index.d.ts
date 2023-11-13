
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Torrent
 * 
 */
export type Torrent = $Result.DefaultSelection<Prisma.$TorrentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Torrents
 * const torrents = await prisma.torrent.findMany()
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
   * // Fetch zero or more Torrents
   * const torrents = await prisma.torrent.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.torrent`: Exposes CRUD operations for the **Torrent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Torrents
    * const torrents = await prisma.torrent.findMany()
    * ```
    */
  get torrent(): Prisma.TorrentDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
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
    Torrent: 'Torrent'
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
      modelProps: 'torrent'
      txIsolationLevel: never
    },
    model: {
      Torrent: {
        payload: Prisma.$TorrentPayload<ExtArgs>
        fields: Prisma.TorrentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TorrentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TorrentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload>
          }
          findFirst: {
            args: Prisma.TorrentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TorrentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload>
          }
          findMany: {
            args: Prisma.TorrentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload>[]
          }
          create: {
            args: Prisma.TorrentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload>
          }
          createMany: {
            args: Prisma.TorrentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TorrentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload>
          }
          update: {
            args: Prisma.TorrentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload>
          }
          deleteMany: {
            args: Prisma.TorrentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TorrentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TorrentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TorrentPayload>
          }
          aggregate: {
            args: Prisma.TorrentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTorrent>
          }
          groupBy: {
            args: Prisma.TorrentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TorrentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TorrentFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TorrentAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TorrentCountArgs<ExtArgs>,
            result: $Utils.Optional<TorrentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
   * Models
   */

  /**
   * Model Torrent
   */

  export type AggregateTorrent = {
    _count: TorrentCountAggregateOutputType | null
    _min: TorrentMinAggregateOutputType | null
    _max: TorrentMaxAggregateOutputType | null
  }

  export type TorrentMinAggregateOutputType = {
    id: string | null
    name: string | null
    magnetLink: string | null
    size: string | null
    type: string | null
    additionalNote: string | null
  }

  export type TorrentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    magnetLink: string | null
    size: string | null
    type: string | null
    additionalNote: string | null
  }

  export type TorrentCountAggregateOutputType = {
    id: number
    name: number
    magnetLink: number
    size: number
    type: number
    additionalNote: number
    _all: number
  }


  export type TorrentMinAggregateInputType = {
    id?: true
    name?: true
    magnetLink?: true
    size?: true
    type?: true
    additionalNote?: true
  }

  export type TorrentMaxAggregateInputType = {
    id?: true
    name?: true
    magnetLink?: true
    size?: true
    type?: true
    additionalNote?: true
  }

  export type TorrentCountAggregateInputType = {
    id?: true
    name?: true
    magnetLink?: true
    size?: true
    type?: true
    additionalNote?: true
    _all?: true
  }

  export type TorrentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torrent to aggregate.
     */
    where?: TorrentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torrents to fetch.
     */
    orderBy?: TorrentOrderByWithRelationInput | TorrentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TorrentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torrents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torrents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Torrents
    **/
    _count?: true | TorrentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TorrentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TorrentMaxAggregateInputType
  }

  export type GetTorrentAggregateType<T extends TorrentAggregateArgs> = {
        [P in keyof T & keyof AggregateTorrent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTorrent[P]>
      : GetScalarType<T[P], AggregateTorrent[P]>
  }




  export type TorrentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorrentWhereInput
    orderBy?: TorrentOrderByWithAggregationInput | TorrentOrderByWithAggregationInput[]
    by: TorrentScalarFieldEnum[] | TorrentScalarFieldEnum
    having?: TorrentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TorrentCountAggregateInputType | true
    _min?: TorrentMinAggregateInputType
    _max?: TorrentMaxAggregateInputType
  }

  export type TorrentGroupByOutputType = {
    id: string
    name: string
    magnetLink: string
    size: string
    type: string | null
    additionalNote: string | null
    _count: TorrentCountAggregateOutputType | null
    _min: TorrentMinAggregateOutputType | null
    _max: TorrentMaxAggregateOutputType | null
  }

  type GetTorrentGroupByPayload<T extends TorrentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TorrentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TorrentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TorrentGroupByOutputType[P]>
            : GetScalarType<T[P], TorrentGroupByOutputType[P]>
        }
      >
    >


  export type TorrentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    magnetLink?: boolean
    size?: boolean
    type?: boolean
    additionalNote?: boolean
  }, ExtArgs["result"]["torrent"]>

  export type TorrentSelectScalar = {
    id?: boolean
    name?: boolean
    magnetLink?: boolean
    size?: boolean
    type?: boolean
    additionalNote?: boolean
  }


  export type $TorrentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Torrent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      magnetLink: string
      size: string
      type: string | null
      additionalNote: string | null
    }, ExtArgs["result"]["torrent"]>
    composites: {}
  }


  type TorrentGetPayload<S extends boolean | null | undefined | TorrentDefaultArgs> = $Result.GetResult<Prisma.$TorrentPayload, S>

  type TorrentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TorrentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TorrentCountAggregateInputType | true
    }

  export interface TorrentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Torrent'], meta: { name: 'Torrent' } }
    /**
     * Find zero or one Torrent that matches the filter.
     * @param {TorrentFindUniqueArgs} args - Arguments to find a Torrent
     * @example
     * // Get one Torrent
     * const torrent = await prisma.torrent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TorrentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TorrentFindUniqueArgs<ExtArgs>>
    ): Prisma__TorrentClient<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Torrent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TorrentFindUniqueOrThrowArgs} args - Arguments to find a Torrent
     * @example
     * // Get one Torrent
     * const torrent = await prisma.torrent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TorrentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TorrentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TorrentClient<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Torrent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorrentFindFirstArgs} args - Arguments to find a Torrent
     * @example
     * // Get one Torrent
     * const torrent = await prisma.torrent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TorrentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TorrentFindFirstArgs<ExtArgs>>
    ): Prisma__TorrentClient<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Torrent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorrentFindFirstOrThrowArgs} args - Arguments to find a Torrent
     * @example
     * // Get one Torrent
     * const torrent = await prisma.torrent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TorrentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TorrentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TorrentClient<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Torrents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorrentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Torrents
     * const torrents = await prisma.torrent.findMany()
     * 
     * // Get first 10 Torrents
     * const torrents = await prisma.torrent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const torrentWithIdOnly = await prisma.torrent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TorrentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TorrentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Torrent.
     * @param {TorrentCreateArgs} args - Arguments to create a Torrent.
     * @example
     * // Create one Torrent
     * const Torrent = await prisma.torrent.create({
     *   data: {
     *     // ... data to create a Torrent
     *   }
     * })
     * 
    **/
    create<T extends TorrentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TorrentCreateArgs<ExtArgs>>
    ): Prisma__TorrentClient<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Torrents.
     *     @param {TorrentCreateManyArgs} args - Arguments to create many Torrents.
     *     @example
     *     // Create many Torrents
     *     const torrent = await prisma.torrent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TorrentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TorrentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Torrent.
     * @param {TorrentDeleteArgs} args - Arguments to delete one Torrent.
     * @example
     * // Delete one Torrent
     * const Torrent = await prisma.torrent.delete({
     *   where: {
     *     // ... filter to delete one Torrent
     *   }
     * })
     * 
    **/
    delete<T extends TorrentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TorrentDeleteArgs<ExtArgs>>
    ): Prisma__TorrentClient<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Torrent.
     * @param {TorrentUpdateArgs} args - Arguments to update one Torrent.
     * @example
     * // Update one Torrent
     * const torrent = await prisma.torrent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TorrentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TorrentUpdateArgs<ExtArgs>>
    ): Prisma__TorrentClient<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Torrents.
     * @param {TorrentDeleteManyArgs} args - Arguments to filter Torrents to delete.
     * @example
     * // Delete a few Torrents
     * const { count } = await prisma.torrent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TorrentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TorrentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Torrents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorrentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Torrents
     * const torrent = await prisma.torrent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TorrentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TorrentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Torrent.
     * @param {TorrentUpsertArgs} args - Arguments to update or create a Torrent.
     * @example
     * // Update or create a Torrent
     * const torrent = await prisma.torrent.upsert({
     *   create: {
     *     // ... data to create a Torrent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Torrent we want to update
     *   }
     * })
    **/
    upsert<T extends TorrentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TorrentUpsertArgs<ExtArgs>>
    ): Prisma__TorrentClient<$Result.GetResult<Prisma.$TorrentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Torrents that matches the filter.
     * @param {TorrentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const torrent = await prisma.torrent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TorrentFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Torrent.
     * @param {TorrentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const torrent = await prisma.torrent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TorrentAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Torrents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorrentCountArgs} args - Arguments to filter Torrents to count.
     * @example
     * // Count the number of Torrents
     * const count = await prisma.torrent.count({
     *   where: {
     *     // ... the filter for the Torrents we want to count
     *   }
     * })
    **/
    count<T extends TorrentCountArgs>(
      args?: Subset<T, TorrentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TorrentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Torrent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorrentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TorrentAggregateArgs>(args: Subset<T, TorrentAggregateArgs>): Prisma.PrismaPromise<GetTorrentAggregateType<T>>

    /**
     * Group by Torrent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorrentGroupByArgs} args - Group by arguments.
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
      T extends TorrentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TorrentGroupByArgs['orderBy'] }
        : { orderBy?: TorrentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TorrentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTorrentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Torrent model
   */
  readonly fields: TorrentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Torrent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TorrentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the Torrent model
   */ 
  interface TorrentFieldRefs {
    readonly id: FieldRef<"Torrent", 'String'>
    readonly name: FieldRef<"Torrent", 'String'>
    readonly magnetLink: FieldRef<"Torrent", 'String'>
    readonly size: FieldRef<"Torrent", 'String'>
    readonly type: FieldRef<"Torrent", 'String'>
    readonly additionalNote: FieldRef<"Torrent", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Torrent findUnique
   */
  export type TorrentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * Filter, which Torrent to fetch.
     */
    where: TorrentWhereUniqueInput
  }


  /**
   * Torrent findUniqueOrThrow
   */
  export type TorrentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * Filter, which Torrent to fetch.
     */
    where: TorrentWhereUniqueInput
  }


  /**
   * Torrent findFirst
   */
  export type TorrentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * Filter, which Torrent to fetch.
     */
    where?: TorrentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torrents to fetch.
     */
    orderBy?: TorrentOrderByWithRelationInput | TorrentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torrents.
     */
    cursor?: TorrentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torrents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torrents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torrents.
     */
    distinct?: TorrentScalarFieldEnum | TorrentScalarFieldEnum[]
  }


  /**
   * Torrent findFirstOrThrow
   */
  export type TorrentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * Filter, which Torrent to fetch.
     */
    where?: TorrentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torrents to fetch.
     */
    orderBy?: TorrentOrderByWithRelationInput | TorrentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torrents.
     */
    cursor?: TorrentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torrents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torrents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torrents.
     */
    distinct?: TorrentScalarFieldEnum | TorrentScalarFieldEnum[]
  }


  /**
   * Torrent findMany
   */
  export type TorrentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * Filter, which Torrents to fetch.
     */
    where?: TorrentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torrents to fetch.
     */
    orderBy?: TorrentOrderByWithRelationInput | TorrentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Torrents.
     */
    cursor?: TorrentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torrents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torrents.
     */
    skip?: number
    distinct?: TorrentScalarFieldEnum | TorrentScalarFieldEnum[]
  }


  /**
   * Torrent create
   */
  export type TorrentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * The data needed to create a Torrent.
     */
    data: XOR<TorrentCreateInput, TorrentUncheckedCreateInput>
  }


  /**
   * Torrent createMany
   */
  export type TorrentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Torrents.
     */
    data: TorrentCreateManyInput | TorrentCreateManyInput[]
  }


  /**
   * Torrent update
   */
  export type TorrentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * The data needed to update a Torrent.
     */
    data: XOR<TorrentUpdateInput, TorrentUncheckedUpdateInput>
    /**
     * Choose, which Torrent to update.
     */
    where: TorrentWhereUniqueInput
  }


  /**
   * Torrent updateMany
   */
  export type TorrentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Torrents.
     */
    data: XOR<TorrentUpdateManyMutationInput, TorrentUncheckedUpdateManyInput>
    /**
     * Filter which Torrents to update
     */
    where?: TorrentWhereInput
  }


  /**
   * Torrent upsert
   */
  export type TorrentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * The filter to search for the Torrent to update in case it exists.
     */
    where: TorrentWhereUniqueInput
    /**
     * In case the Torrent found by the `where` argument doesn't exist, create a new Torrent with this data.
     */
    create: XOR<TorrentCreateInput, TorrentUncheckedCreateInput>
    /**
     * In case the Torrent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TorrentUpdateInput, TorrentUncheckedUpdateInput>
  }


  /**
   * Torrent delete
   */
  export type TorrentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
    /**
     * Filter which Torrent to delete.
     */
    where: TorrentWhereUniqueInput
  }


  /**
   * Torrent deleteMany
   */
  export type TorrentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torrents to delete
     */
    where?: TorrentWhereInput
  }


  /**
   * Torrent findRaw
   */
  export type TorrentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Torrent aggregateRaw
   */
  export type TorrentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Torrent without action
   */
  export type TorrentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torrent
     */
    select?: TorrentSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TorrentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    magnetLink: 'magnetLink',
    size: 'size',
    type: 'type',
    additionalNote: 'additionalNote'
  };

  export type TorrentScalarFieldEnum = (typeof TorrentScalarFieldEnum)[keyof typeof TorrentScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TorrentWhereInput = {
    AND?: TorrentWhereInput | TorrentWhereInput[]
    OR?: TorrentWhereInput[]
    NOT?: TorrentWhereInput | TorrentWhereInput[]
    id?: StringFilter<"Torrent"> | string
    name?: StringFilter<"Torrent"> | string
    magnetLink?: StringFilter<"Torrent"> | string
    size?: StringFilter<"Torrent"> | string
    type?: StringNullableFilter<"Torrent"> | string | null
    additionalNote?: StringNullableFilter<"Torrent"> | string | null
  }

  export type TorrentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    magnetLink?: SortOrder
    size?: SortOrder
    type?: SortOrder
    additionalNote?: SortOrder
  }

  export type TorrentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TorrentWhereInput | TorrentWhereInput[]
    OR?: TorrentWhereInput[]
    NOT?: TorrentWhereInput | TorrentWhereInput[]
    name?: StringFilter<"Torrent"> | string
    magnetLink?: StringFilter<"Torrent"> | string
    size?: StringFilter<"Torrent"> | string
    type?: StringNullableFilter<"Torrent"> | string | null
    additionalNote?: StringNullableFilter<"Torrent"> | string | null
  }, "id">

  export type TorrentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    magnetLink?: SortOrder
    size?: SortOrder
    type?: SortOrder
    additionalNote?: SortOrder
    _count?: TorrentCountOrderByAggregateInput
    _max?: TorrentMaxOrderByAggregateInput
    _min?: TorrentMinOrderByAggregateInput
  }

  export type TorrentScalarWhereWithAggregatesInput = {
    AND?: TorrentScalarWhereWithAggregatesInput | TorrentScalarWhereWithAggregatesInput[]
    OR?: TorrentScalarWhereWithAggregatesInput[]
    NOT?: TorrentScalarWhereWithAggregatesInput | TorrentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Torrent"> | string
    name?: StringWithAggregatesFilter<"Torrent"> | string
    magnetLink?: StringWithAggregatesFilter<"Torrent"> | string
    size?: StringWithAggregatesFilter<"Torrent"> | string
    type?: StringNullableWithAggregatesFilter<"Torrent"> | string | null
    additionalNote?: StringNullableWithAggregatesFilter<"Torrent"> | string | null
  }

  export type TorrentCreateInput = {
    id?: string
    name: string
    magnetLink: string
    size: string
    type?: string | null
    additionalNote?: string | null
  }

  export type TorrentUncheckedCreateInput = {
    id?: string
    name: string
    magnetLink: string
    size: string
    type?: string | null
    additionalNote?: string | null
  }

  export type TorrentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    magnetLink?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TorrentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    magnetLink?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TorrentCreateManyInput = {
    id?: string
    name: string
    magnetLink: string
    size: string
    type?: string | null
    additionalNote?: string | null
  }

  export type TorrentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    magnetLink?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TorrentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    magnetLink?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNote?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type TorrentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    magnetLink?: SortOrder
    size?: SortOrder
    type?: SortOrder
    additionalNote?: SortOrder
  }

  export type TorrentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    magnetLink?: SortOrder
    size?: SortOrder
    type?: SortOrder
    additionalNote?: SortOrder
  }

  export type TorrentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    magnetLink?: SortOrder
    size?: SortOrder
    type?: SortOrder
    additionalNote?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TorrentDefaultArgs instead
     */
    export type TorrentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TorrentDefaultArgs<ExtArgs>

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