import './speakers.css'
import SectionTitle from '../SectionTitle';
import SpeakersData from './SpeakersData';

const Speakers = () => {
    return (
        <section>

            <SectionTitle title="Speakers Sessions" />

            <p className='font-secondary text-white mx-auto px-4 my-8 text-xl max-w-screen-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac euismod neque. Mauris arcu arcu, lobortis <span className='text-red-500'>nec maximus egestas, maximus eget lacus</span> Fusce mollis et elit sed finibus. Quisque sed nunc vitae eros fermentum volutpat. In in laoreet purus. In tempus commodo lacus at elementum. Sed in turpis sed neque cursus posuere at et erat. Ut dignissim lorem eget mauris elementum, sed elementum lorem tempor. Aenean rhoncus vel lacus sit amet iaculis. Nulla facilisi.
            </p>

            <div className='speakers_card_box mx-auto'>
                {
                    SpeakersData.map((speaker, index) => {
                        return <div key={index} className={`speakers_card img${index + 1} relative`}>
                            <img src={speaker.img} className='speaker_card_img' alt="speaker's" />
                            <div className='absolute font-secondary speakers_content bottom-2 right-4'>
                                <span className='block text-right text-white'>
                                    {speaker.name}
                                </span>
                                <span className='speakers_small_text block text-right'>
                                    {speaker.post}
                                </span>
                                <span className='speakers_small_text block text-right text-white'>
                                    {speaker.date}
                                </span>
                            </div>
                        </div>
                    })
                }
            </div>

        </section>
    );
}

export default Speakers;