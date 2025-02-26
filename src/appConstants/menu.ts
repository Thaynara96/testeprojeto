export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    {
        key: 'dashboards',
        label: 'Home',
        isTitle: false,
        icon: 'uil-home-alt',
        badge: { variant: 'success', text: '4' },
        children: [
           
            {
                key: 'ds-ecommerce',
                label: 'Home',
                url: '/dashboard/ecommerce',
                parentKey: 'dashboards',
            },
  
        ],
    },

    {
        key: 'apps-ecommerce',
        label: 'COMUNICAÇÃO',
        isTitle: false,
        icon: 'uil-store',
        children: [
            {
                key: 'ecommerce-products',
                label: 'Mural',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-products',
                label: 'Contatos',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce',
            },
        ],
    },
    {
        key: 'apps-email',
        label: 'SEGURANÇA',
        isTitle: false,
        icon: 'uil-envelope',
        children: [
            {
                key: 'ecommerce-products',
                label: 'CFTV',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-products',
                label: 'Portaria',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce',
            },
        ],
    },
    {
        key: 'apps-projects',
        label: 'AGENDAMENTOS',
        isTitle: false,
        icon: 'uil-briefcase',
        children: [
            {
                key: 'ecommerce-products',
                label: 'Salas',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce'
            },
            {
                key: 'ecommerce-products',
                label: 'Veículos',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce'
            },
        ],
    },
    {
        key: 'apps-tasks',
        label: 'DOCUMENTOS',
        isTitle: false,
        icon: 'uil-clipboard-alt',
        children: [
            {
                key: 'ecommerce-products',
                label: ' Políticas RH',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce'
            },
        ],
    },

    {
        key: 'pages',
        label: 'PROCESSOS',
        isTitle: false,
        icon: 'uil-copy-alt',
        children: [
            {
                key: 'ecommerce-products',
                label: 'ITs',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce'
            },
            {
                key: 'ecommerce-products',
                label: 'Workflow',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce'
            },
        ],
    },

    {
        key: 'base-ui',
        label: 'DASHBOARDS',
        isTitle: false,
        icon: 'uil-box',
        children: [
            {
                key: 'ecommerce-products',
                label: 'KPIs Vendas',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce'
            },
            {
                key: 'ecommerce-products',
                label: 'Produtividade',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce'
            },
            
        ],
    },
    {
        key: 'extended-ui',
        label: 'ACESSOS',
        isTitle: false,
        icon: 'uil-package',
        children: [
            {
                key: 'extended-ui-dragdrop',
                label: 'ERP',
                url: '/ui/extended/dragdrop',
                parentKey: 'extended-ui',
            },
            {
                key: 'extended-ui-rangesliders',
                label: ' CRM',
                url: '/ui/extended/rangesliders',
                parentKey: 'extended-ui',
            },
            
        ],
    },

];

export { MENU_ITEMS };
