
export default [
    {
        path: 'supplier/products',
        meta: {
            requiresAuth: true,
            group: 'supplier',
            title: 'Sản Phẩm'
            
        },
        name: 'Products',
        component: ()=> import('modules/supplier/products')
    },
    {
        path: 'suppllier/orders',
        meta: {
            requiresAuth: true,
            group: 'supplier',
            title: 'Đơn hàng'
        },
        name: 'Orders',
        component: () => import('modules/supplier/orders')
    }
];