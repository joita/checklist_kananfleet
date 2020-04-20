import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65db9a41 = () => interopDefault(import('..\\pages\\kananfleet\\Inspeccion\\index.vue' /* webpackChunkName: "pages_kananfleet_Inspeccion_index" */))
const _0b288f4e = () => interopDefault(import('..\\pages\\kananfleet\\Recepcion\\index.vue' /* webpackChunkName: "pages_kananfleet_Recepcion_index" */))
const _6dfecf0e = () => interopDefault(import('..\\pages\\kananfleet\\recepcionTaller.vue' /* webpackChunkName: "pages_kananfleet_recepcionTaller" */))
const _9b98232a = () => interopDefault(import('..\\pages\\reportes\\ConsumoRefacciones\\index.vue' /* webpackChunkName: "pages_reportes_ConsumoRefacciones_index" */))
const _2e765f8c = () => interopDefault(import('..\\pages\\reportes\\CostoMensual\\index.vue' /* webpackChunkName: "pages_reportes_CostoMensual_index" */))
const _c3bd5cdc = () => interopDefault(import('..\\pages\\reportes\\CostosMantenimiento\\index.vue' /* webpackChunkName: "pages_reportes_CostosMantenimiento_index" */))
const _1ec64ada = () => interopDefault(import('..\\pages\\reportes\\DisponibilidadEquipo\\index.vue' /* webpackChunkName: "pages_reportes_DisponibilidadEquipo_index" */))
const _83d97f1a = () => interopDefault(import('..\\pages\\reportes\\MeanTimeToRepair\\index.vue' /* webpackChunkName: "pages_reportes_MeanTimeToRepair_index" */))
const _71b6cf5d = () => interopDefault(import('..\\pages\\reportes\\ProximosServicios\\index.vue' /* webpackChunkName: "pages_reportes_ProximosServicios_index" */))
const _14113686 = () => interopDefault(import('..\\pages\\reportes\\RendimientoCombustible\\index.vue' /* webpackChunkName: "pages_reportes_RendimientoCombustible_index" */))
const _074eac3f = () => interopDefault(import('..\\pages\\reportes\\TiempoPromedioFallas\\index.vue' /* webpackChunkName: "pages_reportes_TiempoPromedioFallas_index" */))
const _0c4c5386 = () => interopDefault(import('..\\pages\\reportes\\TiempoPromedioReparaciones\\index.vue' /* webpackChunkName: "pages_reportes_TiempoPromedioReparaciones_index" */))
const _15c3d495 = () => interopDefault(import('..\\pages\\reportes\\UsoPorHora\\index.vue' /* webpackChunkName: "pages_reportes_UsoPorHora_index" */))
const _1f7c890a = () => interopDefault(import('..\\pages\\reportes\\todos\\ConsumoRefacciones.vue' /* webpackChunkName: "pages_reportes_todos_ConsumoRefacciones" */))
const _05ef0549 = () => interopDefault(import('..\\pages\\reportes\\todos\\CostoMensual.vue' /* webpackChunkName: "pages_reportes_todos_CostoMensual" */))
const _57b988c2 = () => interopDefault(import('..\\pages\\reportes\\todos\\MeanTimeToRepair.vue' /* webpackChunkName: "pages_reportes_todos_MeanTimeToRepair" */))
const _0200d052 = () => interopDefault(import('..\\pages\\reportes\\todos\\ProximosServicios.vue' /* webpackChunkName: "pages_reportes_todos_ProximosServicios" */))
const _6e969062 = () => interopDefault(import('..\\pages\\reportes\\todos\\RendimientoCombustible.vue' /* webpackChunkName: "pages_reportes_todos_RendimientoCombustible" */))
const _6a60e14a = () => interopDefault(import('..\\pages\\reportes\\todos\\reportes.vue' /* webpackChunkName: "pages_reportes_todos_reportes" */))
const _72d0f3b2 = () => interopDefault(import('..\\pages\\reportes\\todos\\Respaldo_costos.vue' /* webpackChunkName: "pages_reportes_todos_Respaldo_costos" */))
const _01d0023e = () => interopDefault(import('..\\pages\\reportes\\todos\\all_r\\ConsumoRefacciones.vue' /* webpackChunkName: "pages_reportes_todos_all_r_ConsumoRefacciones" */))
const _49fb5dc9 = () => interopDefault(import('..\\pages\\reportes\\todos\\all_r\\CostosMantenimiento.vue' /* webpackChunkName: "pages_reportes_todos_all_r_CostosMantenimiento" */))
const _097c8214 = () => interopDefault(import('..\\pages\\reportes\\todos\\all_r\\MeanTimeToRepair.vue' /* webpackChunkName: "pages_reportes_todos_all_r_MeanTimeToRepair" */))
const _61013ec4 = () => interopDefault(import('..\\pages\\reportes\\todos\\all_r\\ProximosServicios.vue' /* webpackChunkName: "pages_reportes_todos_all_r_ProximosServicios" */))
const _14ff11fa = () => interopDefault(import('..\\pages\\reportes\\todos\\all_r\\RendimientoCombustible.vue' /* webpackChunkName: "pages_reportes_todos_all_r_RendimientoCombustible" */))
const _4074572f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/kananfleet/Inspeccion",
    component: _65db9a41,
    name: "kananfleet-Inspeccion"
  }, {
    path: "/kananfleet/Recepcion",
    component: _0b288f4e,
    name: "kananfleet-Recepcion"
  }, {
    path: "/kananfleet/recepcionTaller",
    component: _6dfecf0e,
    name: "kananfleet-recepcionTaller"
  }, {
    path: "/reportes/ConsumoRefacciones",
    component: _9b98232a,
    name: "reportes-ConsumoRefacciones"
  }, {
    path: "/reportes/CostoMensual",
    component: _2e765f8c,
    name: "reportes-CostoMensual"
  }, {
    path: "/reportes/CostosMantenimiento",
    component: _c3bd5cdc,
    name: "reportes-CostosMantenimiento"
  }, {
    path: "/reportes/DisponibilidadEquipo",
    component: _1ec64ada,
    name: "reportes-DisponibilidadEquipo"
  }, {
    path: "/reportes/MeanTimeToRepair",
    component: _83d97f1a,
    name: "reportes-MeanTimeToRepair"
  }, {
    path: "/reportes/ProximosServicios",
    component: _71b6cf5d,
    name: "reportes-ProximosServicios"
  }, {
    path: "/reportes/RendimientoCombustible",
    component: _14113686,
    name: "reportes-RendimientoCombustible"
  }, {
    path: "/reportes/TiempoPromedioFallas",
    component: _074eac3f,
    name: "reportes-TiempoPromedioFallas"
  }, {
    path: "/reportes/TiempoPromedioReparaciones",
    component: _0c4c5386,
    name: "reportes-TiempoPromedioReparaciones"
  }, {
    path: "/reportes/UsoPorHora",
    component: _15c3d495,
    name: "reportes-UsoPorHora"
  }, {
    path: "/reportes/todos/ConsumoRefacciones",
    component: _1f7c890a,
    name: "reportes-todos-ConsumoRefacciones"
  }, {
    path: "/reportes/todos/CostoMensual",
    component: _05ef0549,
    name: "reportes-todos-CostoMensual"
  }, {
    path: "/reportes/todos/MeanTimeToRepair",
    component: _57b988c2,
    name: "reportes-todos-MeanTimeToRepair"
  }, {
    path: "/reportes/todos/ProximosServicios",
    component: _0200d052,
    name: "reportes-todos-ProximosServicios"
  }, {
    path: "/reportes/todos/RendimientoCombustible",
    component: _6e969062,
    name: "reportes-todos-RendimientoCombustible"
  }, {
    path: "/reportes/todos/reportes",
    component: _6a60e14a,
    name: "reportes-todos-reportes"
  }, {
    path: "/reportes/todos/Respaldo_costos",
    component: _72d0f3b2,
    name: "reportes-todos-Respaldo_costos"
  }, {
    path: "/reportes/todos/all_r/ConsumoRefacciones",
    component: _01d0023e,
    name: "reportes-todos-all_r-ConsumoRefacciones"
  }, {
    path: "/reportes/todos/all_r/CostosMantenimiento",
    component: _49fb5dc9,
    name: "reportes-todos-all_r-CostosMantenimiento"
  }, {
    path: "/reportes/todos/all_r/MeanTimeToRepair",
    component: _097c8214,
    name: "reportes-todos-all_r-MeanTimeToRepair"
  }, {
    path: "/reportes/todos/all_r/ProximosServicios",
    component: _61013ec4,
    name: "reportes-todos-all_r-ProximosServicios"
  }, {
    path: "/reportes/todos/all_r/RendimientoCombustible",
    component: _14ff11fa,
    name: "reportes-todos-all_r-RendimientoCombustible"
  }, {
    path: "/",
    component: _4074572f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
