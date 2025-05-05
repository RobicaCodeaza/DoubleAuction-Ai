import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

function StatisticCard({ title, description, Header, Content, Footer }) {
    return (
        <Card>
            <CardHeader>
                {title && <CardTitle>{title}</CardTitle>}
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
                {Header}
            </CardHeader>
            <CardContent>{Content}</CardContent>
            <CardFooter>{Footer}</CardFooter>
        </Card>
    )
}

export default StatisticCard
