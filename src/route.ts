// @ts-nocheck
import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/doc/Switch.vue'
import Button from './components/doc/Button.vue'
import Dialog from './components/doc/Dialog.vue'
import Tabs from './components/doc/Tabs.vue'
import Markdown from './components/doc/Markdown.vue'
import introduce from './markdown/introduce.md'
import start from './markdown/start.md'
import install from './markdown/install.md'

import { h } from 'vue'
const md = makedown => {
    return h(Markdown, { content: makedown, key: makedown })
}
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/', component: Home,

        },
        {
            path: '/doc', component: Doc,
            children: [
                {
                    path: '',
                    redirect: '/doc/introduce'
                },
                {
                    path: 'introduce',
                    component: md(introduce)
                },
                {
                    path: 'start',
                    component: md(start)
                },
                {
                    path: 'install',
                    component: md(install)
                },
                {
                    path: 'switch',
                    component: Switch
                },
                {
                    path: 'button',
                    component: Button
                },
                {
                    path: 'dialog',
                    component: Dialog
                },
                {
                    path: 'tabs',
                    component: Tabs
                },
            ]
        }
    ],
})
export default router