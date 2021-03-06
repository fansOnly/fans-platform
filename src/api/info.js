import { get, post, useMock } from '@/utils/http'

useMock && require('@/api/mock/info.js')

// 获取文章分类树
export const getInfoClassTree = () => get('/info/class/tree')
// 获取文章分类列表
export const getInfoClassList = () => get('/info/class/index')
// 获取文章分类详情
export const getInfoClassDetail = params => get('/info/class/detail', params)
// 新增文章分类
export const addInfoClass = params => post('/info/class/add', params)
// 更新文章分类
export const updateInfoClass = params => post('/info/class/update', params)
// 删除文章分类
export const deleteInfoClass = params => post('/info/class/delete', params)


// 获取文章列表
export const getInfoList = params => get('/info/index', params)
// 获取文章详情
export const getInfoDetail = params => get('/info/detail', params)
// 新增文章
export const addInfo = params => post('/info/add', params)
// 更新文章
export const updateInfo = params => post('/info/update', params)
// 删除文章
export const deleteInfo = params => post('/info/delete', params)
// 还原文章
export const restoreInfo = params => post('/info/restore', params)
// 清除文章
export const clearInfo = params => post('/info/clear', params)