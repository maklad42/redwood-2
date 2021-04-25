import '@redwoodjs/router'

type ParamType<constraint> = constraint extends "Int" ? number : constraint extends "Boolean" ? boolean : constraint extends "Float" ? number : string;
type RouteParams<Route> = Route extends `${string}/{${infer Param}:${infer Constraint}}/${infer Rest}` ? { [Entry in Param]: ParamType<Constraint> } & RouteParams<`/${Rest}`> : Route extends `${string}/{${infer Param}:${infer Constraint}}` ? { [Entry in Param]: ParamType<Constraint> } : Route extends `${string}/{${infer Param}}/${infer Rest}` ? { [Entry in Param]: string } & RouteParams<`/${Rest}`> : {}
type QueryParams = Record<string | number, string | number | boolean>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    newTask: (params?: RouteParams<"/tasks/new"> & QueryParams) => "/tasks/new"
    editTask: (params?: RouteParams<"/tasks/{id:Int}/edit"> & QueryParams) => "/tasks/{id:Int}/edit"
    task: (params?: RouteParams<"/tasks/{id:Int}"> & QueryParams) => "/tasks/{id:Int}"
    tasks: (params?: RouteParams<"/tasks"> & QueryParams) => "/tasks"
    taskDetails: (params?: RouteParams<"/task-details/{id:Int}"> & QueryParams) => "/task-details/{id:Int}"
    about: (params?: RouteParams<"/about"> & QueryParams) => "/about"
    home: (params?: RouteParams<"/"> & QueryParams) => "/"
  }
}
