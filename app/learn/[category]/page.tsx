export default async function Page({
    params,
  }: {
    params: { categorySlug: string };
  }) {
    // const category = await getCategory({ slug: params.categorySlug });
  
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">
            Params: {JSON.stringify(params)}
            <br />
        </h1>
      </div>
    );
  }