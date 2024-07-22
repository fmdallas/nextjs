import { Card } from '@/app/ui/dashboard/cards'

export default function Page() {
    return (
        <div className=' block space-y-10 text-indigo-500 pb-12 mb-5'>
            <div>
                <Card title='dashboard' value='123456..' type='collected' />
            </div>
            <div>
                <Card title='invoices' value='123456..' type='invoices' />
            </div>

            <p className="text-yellow-500 m-2">this is dashboard pages.</p>
        </div>
    )
}