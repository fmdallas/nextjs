## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


## /app 

包含所有路由，组件以及应用逻辑，主要工作的地方。

## /app/lib

包含应用里面的常用函数（Function），比如 函数及取值函数。

## /app/ui

包含应用有关的所有UI组件，比如：卡片、表格、表单。可以在此处进行定义。

## /public

包含应用需要的所有静态的资源，比如图片等。

## placeholder data

在/app/lib/placeholder-data.ts中包含一些mock的数据，方便进行页面的展示。通常以js对象或者json对象为主。

```javascript

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  // ...
];
```

## /app/lib/definitions.ts

这里定义了从数据库中返回的数据类型。

```typescript

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};
```

