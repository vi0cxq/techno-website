import {defineField} from 'sanity'

export const productDetailsType = defineField({
  name: 'productDetails',
  title: 'Product Details',
  type: 'object',
  fields: [
    defineField({
      name: 'material',
      title: 'Material',
      description: 'The primary material the tile is made from (e.g., ceramic, porcelain).',
      type: 'reference',
      to: [{type: 'material'}],
    }),
    defineField({
      name: 'shape',
      title: 'Shape',
      description:
        'Overall geometric form of the tile, used for layout and design filtering (e.g., square, hexagon, subway).',
      type: 'reference',
      to: [{type: 'shape'}],
    }),
    defineField({
      name: 'dimensions',
      type: 'string',
      title: 'Dimensions',
      description: 'Size of one tile, usually in millimeters (e.g., 75x300 mm).',
    }),
    defineField({
      name: 'thickness',
      type: 'string',
      title: 'Thickness',
      description: 'How thick the tile is, typically measured in millimeters.',
    }),
    defineField({
      name: 'tilesPerSqMetre',
      type: 'number',
      title: 'Tiles per sq metre',
      description: 'Number of tiles needed to cover one square metre.',
    }),
    defineField({
      name: 'tilesPerBox',
      type: 'number',
      title: 'Tiles per box',
      description: 'Total number of tiles contained in one box.',
    }),
    defineField({
      name: 'coveragePerBox',
      type: 'string',
      title: 'Coverage per box',
      description: 'Total area covered by one box of tiles (e.g., 0.5 m²).',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      description: 'The color or shade of the tile.',
      type: 'reference',
      to: [{type: 'color'}],
    }),
    defineField({
      name: 'finish',
      type: 'string',
      title: 'Finish',
      description: 'Surface appearance of the tile (e.g., gloss, matte).',
    }),
    defineField({
      name: 'texture',
      type: 'string',
      title: 'Texture',
      description: 'Physical surface feel or pattern (e.g., rippled, smooth).',
    }),
    defineField({
      name: 'antiSlipRating',
      title: 'Anti-Slip Rating',
      type: 'string',
      options: {
        list: [
          {title: 'Smooth (Not Anti-Slip)', value: 'Smooth'},
          {title: 'Textured', value: 'Textured'},
          {title: 'R9 - Low', value: 'R9'},
          {title: 'R10 - Medium', value: 'R10'},
          {title: 'R11 - High', value: 'R11'},
          {title: 'R12 - Very High', value: 'R12'},
        ],
      },
      description: 'Select the tile’s anti-slip level based on surface texture or rating standard.',
    }),
    defineField({
      name: 'wallOrFloorTile',
      type: 'string',
      title: 'Wall or floor tile',
      description: 'Specifies if the tile is meant for walls, floors, or both.',
      options: {
        list: ['Wall', 'Floor', 'Both'],
      },
    }),
    defineField({
      name: 'area',
      type: 'string',
      title: 'Area',
      description: 'Intended usage location — indoor or outdoor.',
      options: {
        list: ['Indoor', 'Outdoor', 'Both'],
      },
    }),
    defineField({
      name: 'glazed',
      type: 'boolean',
      title: 'Glazed',
      description: 'Indicates whether the tile has a glass-like protective coating.',
      initialValue: false,
    }),
    defineField({
      name: 'requiresSealing',
      type: 'boolean',
      title: 'Requires sealing',
      description: 'States if the tile needs sealing to protect it from stains or moisture.',
      initialValue: false,
    }),
    defineField({
      name: 'frostProof',
      type: 'boolean',
      title: 'Frost proof',
      description: 'Shows whether the tile can withstand freezing temperatures.',
      initialValue: false,
    }),
    defineField({
      name: 'rectifiedEdge',
      type: 'boolean',
      title: 'Rectified edge',
      description: 'Indicates if the tile edges are mechanically cut for precision installation.',
      initialValue: false,
    }),
    defineField({
      name: 'fireHearthsSurround',
      type: 'boolean',
      title: 'Fire hearths surround',
      description: 'Specifies if the tile is suitable for use around fireplaces or stoves.',
      initialValue: false,
    }),
    defineField({
      name: 'trimSize',
      type: 'string',
      title: 'Trim size',
      description: 'The size of any edge trim or finishing pieces used with the tile.',
    }),
  ],
})
