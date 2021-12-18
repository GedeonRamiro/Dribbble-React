


const ContainerCard: React.FC = ( {children} ) => {

   
    return(
        <div className="grid gap-6 my-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    )
}

export default ContainerCard