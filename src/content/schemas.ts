import { z } from 'zod';
export const schemas = {
  home: z.object({
    "hero": z.object({
      "headline": z.string(),
      "headlineAccent": z.string(),
      "subheadline": z.string(),
      "cta1": z.string(),
      "cta2": z.string()
    }),
    "stats": z.array(z.object({
      "id": z.string(),
      "value": z.string(),
      "label": z.string()
    })),
    "products": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "categories": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "description": z.string(),
        "specs": z.string()
      }))
    }),
    "whyJrp": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "body": z.string(),
      "differentiators": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "export": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "regions": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "countries": z.string()
      }))
    }),
    "cta": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "buttonText": z.string()
    })
  }),
  products: z.object({
    "hero": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subheadline": z.string()
    }),
    "categories": z.array(z.object({
      "id": z.string(),
      "slug": z.string(),
      "name": z.string(),
      "imageSlot": z.string(),
      "description": z.string(),
      "products": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "grade": z.string(),
        "description": z.string(),
        "applications": z.string(),
        "features": z.array(z.string())
      }))
    })),
    "certifications": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "description": z.string()
      }))
    }),
    "cta": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "buttonText": z.string()
    })
  }),
  export_page: z.object({
    "hero": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subheadline": z.string()
    }),
    "stats": z.array(z.object({
      "id": z.string(),
      "value": z.string(),
      "label": z.string()
    })),
    "regions": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "flag": z.string(),
        "countries": z.array(z.string()),
        "highlight": z.string(),
        "packagingNote": z.string()
      }))
    }),
    "capabilities": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "compliance": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "description": z.string()
      }))
    }),
    "process": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "steps": z.array(z.object({
        "id": z.string(),
        "number": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "cta": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "buttonText": z.string()
    })
  }),
  about: z.object({
    "hero": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subheadline": z.string()
    }),
    "story": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "body1": z.string(),
      "body2": z.string()
    }),
    "milestones": z.array(z.object({
      "id": z.string(),
      "year": z.string(),
      "title": z.string(),
      "description": z.string()
    })),
    "values": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "facility": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "specs": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "value": z.string()
      }))
    }),
    "team": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "subheadline": z.string(),
      "members": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "title": z.string(),
        "bio": z.string()
      }))
    }),
    "certifications": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "body": z.string()
      }))
    }),
    "cta": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "buttonText": z.string()
    })
  }),
  contact: z.object({
    "hero": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subheadline": z.string()
    }),
    "info": z.object({
      "sectionLabel": z.string(),
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "value": z.string()
      }))
    }),
    "form": z.object({
      "heading": z.string(),
      "subheading": z.string(),
      "inquiryTypes": z.array(z.string())
    }),
    "quickLinks": z.object({
      "headline": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string()
      }))
    })
  })
};
export type Schemas = typeof schemas;