function Empty({ resource, Component }) {
    return (
        <div className="tabland:px-8 flex flex-1 flex-col gap-4 px-4 py-4 pt-0">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">
                    Nu sunt date pentru {resource}
                </h2>
            </div>
            {Component}
        </div>
    )
}

export default Empty
