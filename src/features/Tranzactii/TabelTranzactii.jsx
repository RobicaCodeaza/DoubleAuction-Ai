import { Badge } from '@/components/ui/badge'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

// const products = [
//     {
//         id: 101,
//         name: 'Wireless Headphones',
//         category: 'Electronics',
//         price: 59.99,
//         rating: 4.5,
//         stockQuantity: 120,
//         supplier: 'SoundTech Ltd',
//         dateAdded: '2024-01-15',
//     },
//     {
//         id: 102,
//         name: 'Yoga Mat',
//         category: 'Sports & Fitness',
//         price: 25.0,
//         rating: 4.8,
//         stockQuantity: 200,
//         supplier: 'FitGear Inc',
//         dateAdded: '2024-01-20',
//     },
//     {
//         id: 103,
//         name: 'Coffee Maker',
//         category: 'Home Appliances',
//         price: 80.0,
//         rating: 4.2,
//         stockQuantity: 80,
//         supplier: 'HomeBrew Supplies',
//         dateAdded: '2024-02-05',
//     },
//     {
//         id: 104,
//         name: 'Running Shoes',
//         category: 'Sportswear',
//         price: 70.0,
//         rating: 4.6,
//         stockQuantity: 150,
//         supplier: 'RunWell Co.',
//         dateAdded: '2024-03-15',
//     },
//     {
//         id: 105,
//         name: 'Smartwatch',
//         category: 'Electronics',
//         price: 120.0,
//         rating: 4.7,
//         stockQuantity: 60,
//         supplier: 'TechTime',
//         dateAdded: '2024-04-10',
//     },
//     {
//         id: 106,
//         name: 'Gaming Mouse',
//         category: 'Electronics',
//         price: 45.0,
//         rating: 4.3,
//         stockQuantity: 95,
//         supplier: 'GamePro Gear',
//         dateAdded: '2024-04-22',
//     },
//     {
//         id: 107,
//         name: 'Blender',
//         category: 'Kitchen Appliances',
//         price: 55.0,
//         rating: 4.4,
//         stockQuantity: 110,
//         supplier: 'KitchenEssentials',
//         dateAdded: '2024-05-05',
//     },
//     {
//         id: 108,
//         name: 'Electric Kettle',
//         category: 'Kitchen Appliances',
//         price: 30.0,
//         rating: 4.1,
//         stockQuantity: 130,
//         supplier: 'HomeEssentials',
//         dateAdded: '2024-05-18',
//     },
//     {
//         id: 109,
//         name: 'Office Chair',
//         category: 'Furniture',
//         price: 150.0,
//         rating: 4.6,
//         stockQuantity: 50,
//         supplier: 'FurniPro',
//         dateAdded: '2024-06-01',
//     },
//     {
//         id: 110,
//         name: 'LED Desk Lamp',
//         category: 'Lighting',
//         price: 20.0,
//         rating: 4.5,
//         stockQuantity: 210,
//         supplier: 'BrightLight',
//         dateAdded: '2024-06-10',
//     },
// ]

export default function TabelTranzactii({ transactions }) {
    return (
        <div className="tabland:[&>div]:max-h-[800px] tabport:[&>div]:max-h-[600px] phone:[&>div]:max-h-[400px] grid w-full [&>div]:max-h-[300px] [&>div]:rounded-lg [&>div]:border">
            <Table>
                <TableHeader>
                    <TableRow className="sticky top-0 bg-white after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-stone-200 after:content-[''] dark:bg-stone-950 dark:after:bg-stone-800 [&>*]:whitespace-nowrap">
                        <TableHead className="pl-4">id</TableHead>
                        <TableHead>Produs</TableHead>
                        <TableHead>Vanzator</TableHead>
                        <TableHead>Cumparator</TableHead>
                        <TableHead>Cantitate</TableHead>
                        <TableHead>Pret</TableHead>
                        <TableHead>Runda</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="overflow-hidden">
                    {transactions.map((transaction) => (
                        <TableRow
                            key={transaction.id}
                            className="odd:bg-stone-100/50 dark:odd:bg-stone-800/50 [&>*]:whitespace-nowrap"
                        >
                            <TableCell className="pl-4">
                                {transaction.id}
                            </TableCell>
                            <TableCell className="pl-4">
                                <Badge className="bg-teal-600 text-white hover:bg-teal-700">
                                    {transaction.produs}
                                </Badge>
                            </TableCell>
                            <TableCell className="font-medium">
                                <Badge className="bg-indigo-600 text-white hover:bg-indigo-700">
                                    {transaction.vanzator}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Badge className="bg-lime-500 text-white hover:bg-lime-600">
                                    {transaction.cumparator}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                {/* <Badge className="border border-slate-300 bg-slate-100 text-slate-700">
                                    {product.price}
                                </Badge> */}

                                <Badge className="bg-slate-500 text-white hover:bg-slate-600">
                                    {transaction.cantitate}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                {/* <Badge className="border border-slate-300 bg-slate-100 text-slate-700">
                                    {product.rating}
                                </Badge> */}

                                <Badge className="bg-slate-500 text-white hover:bg-slate-600">
                                    {transaction.pret}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Badge className="border border-slate-300 bg-slate-100 text-slate-700">
                                    {transaction.runda}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
