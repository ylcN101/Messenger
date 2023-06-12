'use client'

import Modal from '@/app/components/Modal'
import Image from 'next/image'

interface ImageModalInterface {
  isOpen?: boolean
  onClose: () => void
  src?: string | null
}

const ImageModal: React.FC<ImageModalInterface> = ({
  onClose,
  isOpen,
  src,
}) => {
  if (!src) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image
          alt="image"
          className="object-cover"
          fill
          src={src}
          sizes="100%"
        />
      </div>
    </Modal>
  )
}

export default ImageModal
