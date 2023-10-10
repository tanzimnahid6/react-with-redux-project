import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
    return (
        <section className="py-8">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-2 lg:px-0 min-h-[300px]">
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />
                    <VideoGridItem />

                </div>
            </section>
        </section>
    );
}
