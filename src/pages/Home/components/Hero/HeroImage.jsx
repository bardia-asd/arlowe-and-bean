import heroImg from "@/assets/hero.jpg";

const HeroImage = () => {
    return (
        <div className="relative animate-fade-up">
            <div className="w-full aspect-4/5 overflow-hidden rounded-3xl shadow-2xl">
                <img
                    src={heroImg}
                    alt="Latte with heart art beside a fresh croissant on an oak table"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 max-w-56 p-6 bg-bg-surface rounded-xl shadow-xl">
                <p className="font-heading italic text-xl text-secondary">
                    <q>The best morning ritual.</q>
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-espresso/50 font-medium">— The Daily Brew</p>
            </div>
        </div>
    );
};

export default HeroImage;
