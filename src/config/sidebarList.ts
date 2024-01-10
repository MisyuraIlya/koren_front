export const sideBarList = [
    // {
    //     id:1,
    //     title:'Dashboard',
    //     icon:'../images/sidebar/dashboard.svg',
    //     href:'/'
    // },
    {
        id:2,
        title:'תוכן העניינים',
        icon:'/images/sidebar/summary.svg',
        href:'/admin/tableOfContents'
    },
    // {
    //     id:3,
    //     title:'משתמשים',
    //     icon:'../images/sidebar/users.svg',
    //     href:'/'
    // },
    // {
    //     id:4,
    //     title:'פעילות',
    //     icon:'../images/sidebar/activity.svg',
    //     href:'/'
    // },
    // {
    //     id:5,
    //     title:'הגדרות',
    //     icon:'../images/sidebar/settings.svg',
    //     href:'/as'
    // }
]

export interface sideBatListType {
    id: number,
    title:'title',
    icon:'string',
    href:'/'
}